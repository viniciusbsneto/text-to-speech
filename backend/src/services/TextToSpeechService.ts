import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1';
import textToSpeechConfig from '@config/textToSpeech';

interface Request {
  text: string;
}

class TextToSpeechService {
  public async execute({ text }: Request): Promise<string> {
    const textToSpeech = new TextToSpeechV1(textToSpeechConfig);

    const params = {
      text,
      voice: 'pt-BR_IsabelaV3Voice',
      accept: 'audio/wav',
    };

    const fileHash = crypto.randomBytes(10).toString('hex');
    const fileName = fileHash.concat('.wav');

    const response = await textToSpeech.synthesize(params);
    const audio = response.result;
    const repairedFile = await textToSpeech.repairWavHeaderStream(audio);

    fs.writeFileSync(path.join('tmp', fileName), repairedFile);
    console.log(`${fileName} written with a corrected wav header`);

    return fileName;
  }
}

export default TextToSpeechService;

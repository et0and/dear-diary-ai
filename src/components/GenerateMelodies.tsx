import { useEffect } from 'react';
import { MusicVAE, INoteSequence, sequences } from '@magenta/music/es6';
import { toMidi } from './utils/midiHelpers';

const MidiConvert = () => {
  useEffect(() => {
    const vae = new MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_16bar_small_q2');

    const SAD: INoteSequence = {
      ticksPerQuarter: 480,
      timeSignatures: [{ time: 0, numerator: 4, denominator: 4 }],
      tempos: [{ time: 0, qpm: 120 }],
      notes: [
        {
          pitch: 64,
          velocity: 74,
          startTime: 0,
          endTime: 0.24583333333333332,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 71,
          velocity: 87,
          startTime: 0.25,
          endTime: 0.4947916666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 71,
          velocity: 101,
          startTime: 0.5,
          endTime: 0.7458333333333333,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 69,
          velocity: 97,
          startTime: 0.75,
          endTime: 0.9958333333333333,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 71,
          velocity: 101,
          startTime: 1,
          endTime: 1.2458333333333333,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 60,
          velocity: 91,
          startTime: 1.25,
          endTime: 1.4958333333333333,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 64,
          velocity: 83,
          startTime: 1.5,
          endTime: 1.7458333333333333,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        { pitch: 71, velocity: 99, startTime: 1.75, endTime: 2, instrument: 0, program: 0, isDrum: false },
        { pitch: 64, velocity: 74, startTime: 2, endTime: 2.245833333333333, instrument: 0, program: 0, isDrum: false },
        {
          pitch: 71,
          velocity: 87,
          startTime: 2.25,
          endTime: 2.4947916666666665,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 71,
          velocity: 101,
          startTime: 2.5,
          endTime: 2.745833333333333,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 69,
          velocity: 97,
          startTime: 2.75,
          endTime: 2.995833333333333,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 71,
          velocity: 101,
          startTime: 3,
          endTime: 3.245833333333333,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 64,
          velocity: 83,
          startTime: 3.25,
          endTime: 3.495833333333333,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        { pitch: 71, velocity: 99, startTime: 3.5, endTime: 3.75, instrument: 0, program: 0, isDrum: false },
        { pitch: 64, velocity: 99, startTime: 3.75, endTime: 4, instrument: 0, program: 0, isDrum: false },
        { pitch: 84, velocity: 99, startTime: 4, endTime: 4.25, instrument: 0, program: 0, isDrum: false },
        { pitch: 83, velocity: 99, startTime: 4.25, endTime: 4.5, instrument: 0, program: 0, isDrum: false },
        { pitch: 64, velocity: 99, startTime: 4.5, endTime: 4.75, instrument: 0, program: 0, isDrum: false },
        { pitch: 76, velocity: 99, startTime: 4.75, endTime: 5, instrument: 0, program: 0, isDrum: false },
        { pitch: 74, velocity: 99, startTime: 5, endTime: 5.25, instrument: 0, program: 0, isDrum: false },
        { pitch: 64, velocity: 99, startTime: 5.25, endTime: 5.5, instrument: 0, program: 0, isDrum: false },
        { pitch: 72, velocity: 99, startTime: 5.5, endTime: 5.75, instrument: 0, program: 0, isDrum: false },
        { pitch: 71, velocity: 99, startTime: 5.75, endTime: 6, instrument: 0, program: 0, isDrum: false },
        { pitch: 72, velocity: 99, startTime: 6, endTime: 6.25, instrument: 0, program: 0, isDrum: false },
        { pitch: 71, velocity: 99, startTime: 6.25, endTime: 6.5, instrument: 0, program: 0, isDrum: false },
        { pitch: 74, velocity: 99, startTime: 6.5, endTime: 6.75, instrument: 0, program: 0, isDrum: false },
        { pitch: 72, velocity: 99, startTime: 6.75, endTime: 7, instrument: 0, program: 0, isDrum: false },
        { pitch: 74, velocity: 99, startTime: 7, endTime: 7.25, instrument: 0, program: 0, isDrum: false },
        { pitch: 72, velocity: 99, startTime: 7.25, endTime: 7.5, instrument: 0, program: 0, isDrum: false },
        { pitch: 76, velocity: 99, startTime: 7.5, endTime: 7.75, instrument: 0, program: 0, isDrum: false },
        { pitch: 74, velocity: 99, startTime: 7.75, endTime: 8, instrument: 0, program: 0, isDrum: false },
        { pitch: 76, velocity: 99, startTime: 8, endTime: 8.25, instrument: 0, program: 0, isDrum: false },
        { pitch: 74, velocity: 99, startTime: 8.25, endTime: 8.5, instrument: 0, program: 0, isDrum: false },
        { pitch: 77, velocity: 99, startTime: 8.5, endTime: 8.75, instrument: 0, program: 0, isDrum: false },
        { pitch: 76, velocity: 99, startTime: 8.75, endTime: 9, instrument: 0, program: 0, isDrum: false },
        { pitch: 77, velocity: 99, startTime: 9, endTime: 9.25, instrument: 0, program: 0, isDrum: false },
        { pitch: 76, velocity: 99, startTime: 9.25, endTime: 9.5, instrument: 0, program: 0, isDrum: false },
      ],
      totalTime: 9.5,
      quantizationInfo: { stepsPerQuarter: 4 },
    };

    const HAPPY: INoteSequence = {
      ticksPerQuarter: 480,
      timeSignatures: [{ time: 0, numerator: 4, denominator: 4 }],
      notes: [
        {
          pitch: 65,
          velocity: 103,
          startTime: 4.094791666666667,
          endTime: 4.219791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 72,
          velocity: 91,
          startTime: 4.219791666666667,
          endTime: 4.344791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 76,
          velocity: 87,
          startTime: 4.344791666666667,
          endTime: 4.469791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 77,
          velocity: 73,
          startTime: 4.469791666666667,
          endTime: 4.594791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 69,
          velocity: 73,
          startTime: 4.594791666666667,
          endTime: 4.719791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 76,
          velocity: 101,
          startTime: 4.719791666666667,
          endTime: 4.844791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 77,
          velocity: 101,
          startTime: 4.844791666666667,
          endTime: 4.969791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 72,
          velocity: 101,
          startTime: 4.969791666666667,
          endTime: 5.094791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 81,
          velocity: 101,
          startTime: 5.094791666666667,
          endTime: 5.219791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 88,
          velocity: 101,
          startTime: 5.219791666666667,
          endTime: 5.344791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 89,
          velocity: 101,
          startTime: 5.344791666666667,
          endTime: 5.469791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 88,
          velocity: 101,
          startTime: 5.469791666666667,
          endTime: 5.594791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 84,
          velocity: 101,
          startTime: 5.594791666666667,
          endTime: 5.719791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 86,
          velocity: 101,
          startTime: 5.719791666666667,
          endTime: 5.844791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 84,
          velocity: 101,
          startTime: 5.844791666666667,
          endTime: 5.969791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 83,
          velocity: 101,
          startTime: 5.969791666666667,
          endTime: 6.094791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 84,
          velocity: 101,
          startTime: 6.094791666666667,
          endTime: 6.219791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 67,
          velocity: 103,
          startTime: 6.219791666666667,
          endTime: 6.344791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 74,
          velocity: 91,
          startTime: 6.344791666666667,
          endTime: 6.469791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 78,
          velocity: 87,
          startTime: 6.469791666666667,
          endTime: 6.594791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 81,
          velocity: 87,
          startTime: 6.594791666666667,
          endTime: 6.719791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 85,
          velocity: 87,
          startTime: 6.719791666666667,
          endTime: 6.844791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 88,
          velocity: 87,
          startTime: 6.844791666666667,
          endTime: 6.969791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 91,
          velocity: 87,
          startTime: 6.969791666666667,
          endTime: 7.094791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 96,
          velocity: 87,
          startTime: 7.094791666666667,
          endTime: 7.219791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 93,
          velocity: 87,
          startTime: 7.219791666666667,
          endTime: 7.344791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 93,
          velocity: 87,
          startTime: 7.344791666666667,
          endTime: 7.469791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 93,
          velocity: 87,
          startTime: 7.469791666666667,
          endTime: 7.594791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 90,
          velocity: 87,
          startTime: 7.594791666666667,
          endTime: 7.719791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 86,
          velocity: 87,
          startTime: 7.719791666666667,
          endTime: 7.844791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 82,
          velocity: 87,
          startTime: 7.844791666666667,
          endTime: 7.969791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 82,
          velocity: 87,
          startTime: 7.969791666666667,
          endTime: 8.094791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 77,
          velocity: 87,
          startTime: 8.094791666666667,
          endTime: 8.219791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 74,
          velocity: 87,
          startTime: 8.219791666666667,
          endTime: 8.344791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 70,
          velocity: 87,
          startTime: 8.344791666666667,
          endTime: 8.469791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 65,
          velocity: 87,
          startTime: 8.469791666666667,
          endTime: 8.594791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 62,
          velocity: 87,
          startTime: 8.594791666666667,
          endTime: 8.719791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 60,
          velocity: 87,
          startTime: 8.719791666666667,
          endTime: 8.844791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 70,
          velocity: 87,
          startTime: 8.844791666666667,
          endTime: 8.969791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 75,
          velocity: 87,
          startTime: 8.969791666666667,
          endTime: 9.094791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 74,
          velocity: 87,
          startTime: 9.094791666666667,
          endTime: 9.219791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 86,
          velocity: 87,
          startTime: 9.219791666666667,
          endTime: 9.344791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 74,
          velocity: 87,
          startTime: 9.344791666666667,
          endTime: 9.469791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 86,
          velocity: 87,
          startTime: 9.469791666666667,
          endTime: 9.594791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 77,
          velocity: 87,
          startTime: 9.594791666666667,
          endTime: 9.719791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 88,
          velocity: 87,
          startTime: 9.719791666666667,
          endTime: 9.844791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 77,
          velocity: 87,
          startTime: 9.844791666666667,
          endTime: 9.969791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 89,
          velocity: 87,
          startTime: 9.969791666666667,
          endTime: 10.094791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 76,
          velocity: 87,
          startTime: 10.094791666666667,
          endTime: 10.219791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 89,
          velocity: 87,
          startTime: 10.219791666666667,
          endTime: 10.344791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 74,
          velocity: 87,
          startTime: 10.344791666666667,
          endTime: 10.469791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 89,
          velocity: 87,
          startTime: 10.469791666666667,
          endTime: 10.594791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 76,
          velocity: 87,
          startTime: 10.594791666666667,
          endTime: 10.719791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 74,
          velocity: 87,
          startTime: 10.719791666666667,
          endTime: 10.844791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 88,
          velocity: 87,
          startTime: 10.844791666666667,
          endTime: 10.969791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 72,
          velocity: 87,
          startTime: 10.969791666666667,
          endTime: 11.094791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 81,
          velocity: 87,
          startTime: 11.094791666666667,
          endTime: 11.219791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 72,
          velocity: 87,
          startTime: 11.219791666666667,
          endTime: 11.344791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 79,
          velocity: 87,
          startTime: 11.344791666666667,
          endTime: 11.469791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 74,
          velocity: 87,
          startTime: 11.469791666666667,
          endTime: 11.594791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 77,
          velocity: 87,
          startTime: 11.594791666666667,
          endTime: 11.719791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 76,
          velocity: 87,
          startTime: 11.719791666666667,
          endTime: 11.844791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
        {
          pitch: 86,
          velocity: 87,
          startTime: 11.844791666666667,
          endTime: 11.969791666666667,
          instrument: 0,
          program: 0,
          isDrum: false,
        },
      ],
      totalTime: 11.969791666666667,
      quantizationInfo: { stepsPerQuarter: 4 },
    };

    const quantizedHappy = sequences.quantizeNoteSequence(HAPPY, 4);
    const quantizedSad = sequences.quantizeNoteSequence(SAD, 4);

    vae.initialize().then(() => {
      vae.interpolate([quantizedSad, quantizedHappy], 3).then((melodies) => {
        console.log(JSON.stringify(melodies));
      });
    });
  }, []);

  return <div>Check the console!</div>;
};

export default MidiConvert;

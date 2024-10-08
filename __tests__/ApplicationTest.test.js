import App from '../src/App.js';
import Console from '../src/utils/Console.js';
import Random from '../src/utils/Random.js';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (choices) => {
  Random.getRandomRPS = jest.fn();
  choices.forEach((choice) => {
    Random.getRandomRPS.mockReturnValueOnce(choice);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});
  logSpy.mockClear();
  return logSpy;
};

describe('가위바위보 게임', () => {
  test('가위바위보 게임 전체 로직 테스트', async () => {
    // given
    const logSpy = getLogSpy();

    const computerChoices = ['바위', '바위', '바위'];
    const userChoices = ['1', '가위', '바위', '보'];

    const messages = [
      '가위바위보 게임을 시작합니다.',
      '상대방은 바위를 제출했습니다. 상대방이 승리했습니다!',
      '상대방은 바위를 제출했습니다. 무승부입니다!',
      '상대방은 바위를 제출했습니다. 당신이 승리했습니다!',
      '가위바위보 게임을 승리했습니다! 게임 종료',
    ];

    mockRandoms(computerChoices);
    mockQuestions(userChoices);

    // when
    const app = new App();
    await app.play();

    // then
    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    });
  });

  test('예외 테스트', async () => {
    // given
    const computerChoices = ['바위'];
    const userChoices = ['1', '보위'];

    mockRandoms(computerChoices);
    mockQuestions(userChoices);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});

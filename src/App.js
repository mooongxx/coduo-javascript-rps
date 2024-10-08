import Console from './utils/Console.js';

class App {
  async play() {
    Console.print('가위바위보 게임을 시작합니다.');
    const count = await Console.readLineAsync('승리를 위한 횟수를 입력하세요: ');

    // 코드를 작성해 주세요.

    return;
  }
}

export default App;

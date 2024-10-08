import App from '../src/App.js';

describe('가위바위보 게임', () => {
  test('가위바위보 게임 전체 로직 테스트', () => {
    // given

    // when
    const app = new App();

    // then
    expect(app.play()).toBe('Hello World!');
  });
});

import { Condition } from 'selenium-webdriver';

export default function () {
  return new Condition('Waiting for Direct Line to connect', async driver => {
    return await driver.executeScript(() => {
      const { store } = window.WebChatTest;
      const { activities } = store.getState();

      return activities.filter(({ from: { role } }) => role === 'user').every(({ channelData: { state } }) => state === 'sent');
    });
  });
}

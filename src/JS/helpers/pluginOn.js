import '@pnotify/core/dist/BrightTheme.css';

const { error } = require('@pnotify/core');
const { notice } = require('@pnotify/core');
const { defaults } = require('@pnotify/core');
defaults.closer = false;
defaults.sticker = false;
defaults.delay = 1000;
defaults.shadow = true;

function pluginError() {
  return error('Please enter CORRECT query');
}
function pluginNotice() {
  return notice('Please enter SOME query');
}

export { pluginError, pluginNotice };

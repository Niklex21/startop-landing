/**
 * Estimates the reading time of a text in minutes based on the average reading
 * speed.
 *
 * @param {*} text the text to evaluate
 * @returns the estimated read time, in minutes
 */
function getReadingTime(text) {
  return Math.ceil(text.split(' ').length /
                   200); // 200 is the average WPM read speed
}

export {getReadingTime}
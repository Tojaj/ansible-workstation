/* Belongs to: /usr/lib64/firefox/defaults/pref/ */

/* Common */

pref("browser.download.useDownloadDir", false);
pref("browser.sessionstore.interval", 600000);

/* Hardware acceleration via VAAPI */
/* More info:
 * https://wiki.archlinux.org/index.php/Firefox#Hardware_video_acceleration
 */
pref("gfx.webrender.all", true);
pref("layers.acceleration.force-enabled", true);
pref("media.ffmpeg.vaapi.enabled", true);
pref("media.ffvpx.enabled", false);

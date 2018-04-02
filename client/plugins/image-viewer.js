/**
 * @desc Image viewer
 */

'use strict'

import ImageViewer from 'juejin-image-viewer/src/juejin-image-viewer'

export default () => {
  if (process.client) {
    window.ImageViewer = ImageViewer
  }
}

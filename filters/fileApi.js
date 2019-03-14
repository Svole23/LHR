/**
 *  Takes relative url and makes it
 *  absolute url to backend delivery File API
 *
 *  files/image.jpeg => https://api.backend.com/api/delivery/files/image.jpeg
 */

function fileApi(relativeUrl, version) {
  let absoluteUrl = `${process.env.CG_URL}api/delivery/${relativeUrl}`
  if(version && version.length > 0) {
    absoluteUrl += '?v=' + version
  }
  // console.log(absoluteUrl)
  return absoluteUrl
}

export default fileApi

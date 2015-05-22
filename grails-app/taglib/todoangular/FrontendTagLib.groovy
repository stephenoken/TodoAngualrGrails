package todoangular

class FrontendTagLib {
//    static defaultEncodeAs = [taglib:'html']
//    static encodeAsForTags = [tagName: [taglib:'html'], otherTagName: [taglib:'none']]
    def frontend = { attrs, body ->
        def htmlContent = new File("src/main/webapp/views/index.html").text
        out << htmlContent
    }
}

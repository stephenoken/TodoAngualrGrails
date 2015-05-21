package todoangular

class IndexTagLib {
//    static defaultEncodeAs = [taglib:'html']
    //static encodeAsForTags = [tagName: [taglib:'html'], otherTagName: [taglib:'none']]
    def renderIfExists = { attrs, body ->
        def htmlContent = new File("src/main/webapp/index.html").text
//        out << g.resource(file:'');
        out << htmlContent
    }
}

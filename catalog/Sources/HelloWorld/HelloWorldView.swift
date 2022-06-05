import SwiftUI

public struct HelloWorldView: View {
    public init() {}

    public var body: some View {
        Text("Hello, World!")
    }
}

struct HelloWorldView_Previews: PreviewProvider {
    static var previews: some View {
        HelloWorldView().previewLayout(.sizeThatFits)
    }
}

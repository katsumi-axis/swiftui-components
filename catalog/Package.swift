// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.
import PackageDescription

let package = Package(
  name: "Frameworks",
  platforms: [
    .iOS(.v14)
  ],
  products: [
    .library(name: "HelloWorld", targets: ["HelloWorld"])
  ],
  dependencies: [
    .package(
      name: "SnapshotTesting",
      url: "https://github.com/pointfreeco/swift-snapshot-testing.git",
      from: "1.9.0"
    )
  ],
  targets: [
    .target(name: "HelloWorld"),
    .testTarget(name: "SnapshotTests", dependencies: ["HelloWorld", "SnapshotTesting"])
  ]
)

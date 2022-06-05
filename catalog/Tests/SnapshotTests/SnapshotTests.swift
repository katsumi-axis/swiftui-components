//
//  SnapshotTests.swift
//  
//
//  Created by Katsumi Furuta on 2022/06/05.
//

@testable import HelloWorld
import SnapshotTesting
import SwiftUI
import UIKit
import XCTest

class SnapshotTests: XCTestCase {
  func testHelloWorldView() throws {
      let view: UIView = UIHostingController(rootView: HelloWorldView()).view
      assertSnapshot(matching: view, as: .image(size: view.intrinsicContentSize))
  }
}

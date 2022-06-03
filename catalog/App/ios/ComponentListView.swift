//
//  ContentView.swift
//  Shared
//
//  Created by Katsumi Furuta on 2022/06/03.
//

import SwiftUI
import HelloWorld

struct ComponentListView: View {
    var body: some View {
        NavigationView {
            List {
                NavigationLink(destination: HelloWorldView()) {
                    Text("HelloWorld")
                }
            }
            .navigationBarTitle("Components")
        }
    }
}

struct ComponentListView_Previews: PreviewProvider {
    static var previews: some View {
        ComponentListView()
    }
}

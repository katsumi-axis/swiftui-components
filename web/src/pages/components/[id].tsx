import Header from '@/components/ui/header'
import type { NextPage } from 'next'
import Sidebar from '@/components/ui/sidebar'
import Code from '@/components/ui/code'
import Head from 'next/head'

const Component: NextPage = () => {
    return (
        <>
            <Header />

            <Head>
                <title>HelloWorldView - SwiftUI Component</title>
            </Head>


            <div className="bg-zinc-800">
                <div className="min-h-full container mx-auto flex">
                    <Sidebar />
                    <div className="w-1/2 min-h-full">
                        <div
                            className="p-2 font-sm text-base text-white"
                            style={{ background: '#1E1E1E' }}
                        >
                            Component / HelloWorldView.swift
                        </div>
                        <Code
                            source={`
//
//  HelloWorld.swift
//  
//
//  Created by Katsumi Furuta on 2022/06/03.
//

import SwiftUI

public struct HelloWorldView: View {
    public init() {}

    public var body: some View {
        Text("Hello, World!")
    }
}

struct HelloWorldView_Previews: PreviewProvider {
    static var previews: some View {
         HelloWorldView()
    }
}
              `}
                        />
                    </div>
                    <div className="w-1/2 min-h-full flex items-center justify-center" style={{ background: '#404040' }}>
                        <img src="https://raw.githubusercontent.com/katsumi-axis/swiftui-components/main/catalog/Tests/SnapshotTests/__Snapshots__/SnapshotTests/testHelloWorldView.1.png" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Component

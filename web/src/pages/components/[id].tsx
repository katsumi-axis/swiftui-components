import Header from '@/components/ui/header'
import type { GetStaticProps, NextPage } from 'next'
import Sidebar from '@/components/ui/sidebar'
import Code from '@/components/ui/code'
import CommonMeta from '@/utils/CommonMeta'
import { Component } from '@/types/component'

type Props = {
    component: Component
    source: string
}

const ComponentView: NextPage<Props> = ({ component, source }) => {
    return (
        <>
            <CommonMeta />
            <Header />

            <div className="container m-auto flex">
                <div className="flex flex-col flex-grow p-4 my-12">
                    <div className="flex">
                        <span className="font-bold text-2xl">{component.name}</span>
                    </div>
                    <p className="mt-1">
                        {component.description}
                    </p>
                    <div className="flex mt-1 text-gray-500">
                        creatored by katsumi
                    </div>
                </div>
            </div>

            <div className="container m-auto flex md:flex-row flex-col">
                <div className="w-full md:w-1/2 min-h-full">
                    <Code source={source} />
                </div>
                <div
                    className="w-full md:w-1/2 min-h-full flex items-center justify-center"
                    style={{ background: '#404040' }}
                >
                    <img
                        src={component.image}
                        alt={component.name}
                        className="border-4 border-scale-500 rounded-sm"
                    />
                </div>
            </div>
        </>
    )
}

export default ComponentView

export const getStaticPaths = async () => {
    const res = await fetch(
        'https://raw.githubusercontent.com/katsumi-axis/swiftui-components/main/catalog/Tools/components.json'
    )
    const json = await res.json()
    const paths = json.data.map((content: Component) => `/components/${content.name}`)
    return { paths, fallback: false }
}

type Params = {
    params: {
        id: string
    }
}

export const getStaticProps = async ({ params }: Params) => {
    const id = params.id
    const res = await fetch(
        'https://raw.githubusercontent.com/katsumi-axis/swiftui-components/main/catalog/Tools/components.json'
    )
    const json = await res.json()
    const component = json.data.find((d: Component) => d.name == id)
    const source = await fetch(component.source).then((res) => res.text())

    return {
        props: {
            component: component,
            source: source,
        },
    }
}

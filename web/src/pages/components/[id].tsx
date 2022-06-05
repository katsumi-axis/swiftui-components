import Header from '@/components/ui/header'
import type { GetStaticProps, NextPage } from 'next'
import Sidebar from '@/components/ui/sidebar'
import Code from '@/components/ui/code'
import CommonMeta from '@/utils/CommonMeta'
import { Component } from '@/types/component'

const ComponentView: NextPage = ({component, source}) => {

    return (
        <>
            <CommonMeta />

            <Header />

            <div className="bg-zinc-800">
                <div className="min-h-full container mx-auto flex">
                    <Sidebar />
                    <div className="w-1/2 min-h-full">
                        <div
                            className="p-2 font-sm text-base text-white"
                            style={{ background: '#1E1E1E' }}
                        >
                            Component / {component.name}
                        </div>
                        <Code source={source} />
                    </div>
                    <div
                        className="w-1/2 min-h-full flex items-center justify-center"
                        style={{ background: '#404040' }}
                    >
                        <img src={component.image} alt={component.name}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComponentView


export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/mock.json");
    const json = await res.json();
    console.log(json.data)
    const paths = json.data.map((content: Component)  => `/components/${content.name}`);
    return { paths, fallback: false };
}

type Params = {
    params: {
        id: string
    }
}


export const getStaticProps = async ({ params }: Params) => {
    const id = params.id;
    const res = await fetch(`http://localhost:3000/mock.json`)
    const json = await res.json();
    const component = json.data.find((d: Component) => d.name == id);
    const source = await fetch(component.source).then(res => res.text());

    return {
        props: {
            component: component,
            source: source
        }
    }
}
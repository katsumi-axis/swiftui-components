export const pagesPath = {
  "components": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/components/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

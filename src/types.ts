export type TContent = {
    title: string
    text: string
    img?: string
}

type TContentArr = TContent[]

export type ImageProps = {
    src: string
}

export type CardBodyProps = {
    content: TContent
}

export const mockContentArr: TContentArr = [
    {
        title: "Card Title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg"
    },
    {
        title: "Card Title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        title: "Card Title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQm80-jllq5pwfEtjTmXb8WRHtkuVfgLn5kILTHBF&s"
    },
]







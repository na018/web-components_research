export default {
    'progress-bar': {
        id: 'progress-bar',
        name: 'Progress Bar',
        type: 'Molecule',
        properties: [
            {
                name: 'complete',
                type: 'Number',
                default: 30,
                custom: 30
            },
            {
                name: 'title',
                type: 'String',
                default: 'hello world',
                custom: 'hello world'
            },
            {
                name: 'crazyArray',
                type: 'Array',
                default: [1, 2, 3, 4],
                custom: [1, 2, 3, 4]
            }
        ],
        content: [],
        contentTypes: []
    },
    'market-banner': {
        id: 'market-banner',
        name: 'Market Banner',
        type: 'Molecule',
        properties: [],
        content: [
            `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" alt >`,
            `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/taj-mahal_copy.jpg" alt >`,
            `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ibiza.jpg" alt >`,
            `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" alt >`
        ],
        contentTypes: [
            {
                tagName: 'img',
                attributes: [
                    {src: 'https://someUrl.com'},
                    {alt: 'Some text describing the image'}
                ]
            }
        ]
    }
}
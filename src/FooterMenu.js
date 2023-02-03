import {v4 as uuidv4} from 'uuid';
function FooterMenu() {
    const footerMenu = [
        {
            id: uuidv4(),
            title: 'Support',
        },
        {
            id: uuidv4(),
            title: 'Help Center',
        },
        {
            id: uuidv4(),
            title: 'Cancellation options',
        },
        {
            id: uuidv4(),
            title: 'AirCover',
        }
    ]
    return (
        <ul>
            {footerMenu.map(el=>
                <li key={el.id}>{el.title} </li>

            )
            }


        </ul>
    )
}

export default FooterMenu;

function Menu(){
    const headerMenu = ['Home', 'Apartments', 'Villas', 'Townhouses']

    return(
        <div>

            {headerMenu.map((el,i)=>
                <li key={i}>{el}</li>
            )
            }

        </div>
    )
}
export default Menu;

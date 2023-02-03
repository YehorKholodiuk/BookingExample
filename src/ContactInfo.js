function ContactInfo() {
    const infoCompany =
        {
            name:'Booking Incorporation',
            address:
                {
                    city: 'LA',
                    street: 'Las villas',
                    building: 305,
                },
            phone: '345-453-65-65',
            email: 'booking@booking.com',
        }
    return (
        <div>

            <h3>{infoCompany.name}:</h3>
            {infoCompany.address.city},  {infoCompany.address.street}, {infoCompany.address.building}
            <hr/><div> <strong> Our contacts:</strong>
            <br/> tel. {infoCompany.phone}
            <br/> email: {infoCompany.email}
        </div>
        </div>
    )
}

export default ContactInfo;

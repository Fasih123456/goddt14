import Header from './Header';
import Footer from './Footer';
import Accord from '../components/Accordion';

const contents = [
    
    'A: We accept most vehicles including but not limited to cars, trucks, vans, SUV’s, trailers, RV’s and boats. There are a few conditions that must be met in order for your vehicle to qualify, Donation must be made by the registered owner, or their legal representative. Vehicle must be registered in Canada Vehicle must be in ‘complete’ state with no major parts missing.We do accept vehicles with body damage.Special conditions will apply to boats, trailers, and RVsWe cannot accept vehicles with insurance claims against them.We cannot accept vehicles with liens or encumbrances on them.In most cases RVs are required to be dropped off, however they will be handled on an individual basis.'
    ,
    `
    A: To donate your vehicle, follow the steps below.

    From the home page, select the tab ‘Donate Now’. Here you will be asked to answer a few simple questions to qualify your vehicle.
    Fill out the donation form with your vehicle information, contact information, and select the charity you wish to donate to.
    Review the details you have entered, agree to the terms and conditions, and submit your vehicle for donation.
    Further instructions will be provided for either drop off or towing.
    Check your email for our confirmation email. If you do not see the confirmation message immediately, please check your junk mail folder.
    For more detailed information on this topic, please click on the link more info
    `
    ,
    `
    How much will my tax receipt be?
    A: There are many factors that go into determining this amount. For more detailed information, please click on this link – more info.
    `
    ,
    `
    A: Yes, we can accept non-running vehicles.
    `
    ,
    `
    Legal proof of ownership is required. Current or expired registration, a Bill of Sale, or a ‘proof of last vehicle registration’ letter from your local registry is acceptable.
    `
    ,
    `
    A: If your vehicle is being recycled, you no longer require insurance on the vehicle once it has been picked up by our towing agent. If your vehicle is going to auction, we suggest that you keep insurance on your vehicle until the vehicle has sold. We will notify you by email when your vehicle has been sold.
    `
    ,
    `
    A: You will be contacted by our towing agent within 48 hours. At that time, you can arrange the most convenient time for pick-up of your vehicle.
    `
    ,
    `
    A: The license plates belong to the registered owner of the vehicle. If they are left on the vehicle at the time of donation, the auction or recycling agent will store, or destroy, the plates. Recyclers typically crush, shred, or mar the plate to ensure that it cannot be used by a non-registered owner.

    In some provinces a small rebate is available when license plates are returned to the provincial registries. If you wish to keep your plates, simply remove them at the time of pick up, or request that our tow support agents do that for you. They will be happy to help!
    
    *Please note: vehicles left unplated on city streets will likely be impounded by your city parking authority. Although this rarely occurs, if your vehicle is left unplated on the street prior to our towing agents arriving, the city may impound the vehicle. Donate a Car Canada cannot be held responsible for those impound fees.
    `
    ,
    `
    A: We service several areas across Canada and are continually adding new locations. If we do not currently service your area, we will attempt to find an agent to pick-up your vehicle upon receiving your online submission.
    `
    ,
    `
    A: You do not have to pay for your vehicle to be towed. If the vehicle is recycled, the towing cost is included. If your vehicle is sent to the auction, the towing cost is deducted from the sale price of your vehicle.
    `
    ,
    `
    A: Dropping off your vehicle at our selling agent is beneficial for the charity as it eliminates transport costs being deducted from your donation. We have various drop off locations based on whether we can auction or recycle your donated vehicle. We can provide you drop off locations and instructions once your online form is complete.
    `
    ,
    `
    A: Yes! You can donate your vehicle to ANY registered Canadian charity. When you fill in your donation form you will be given the opportunity to name any charity not already on our receiving list (add it into the extra notes section). You will also need to select a second choice charity from our active drop-down list in order to complete the form.
    `
    ,
    `
    A: Yes, you will receive a tax deductible receipt for your donation. Guaranteed!
    `
    ,
    `A: After the sale of your vehicle and our accounting process is complete, we will send you an email confirming your donation has been sent to the charity. You should then receive your tax receipt within 2 weeks of the charity receiving your gift.
    `
    ,
    `
    A: If you have a vehicle manufactured prior to 1980, or if you are donating a boat, motorcycle, trailer, or another type of vehicle that does not meet this requirement, please add zeros to the end of your serial number to total 17 digits.
    `
    ,
    `
    A: To Donate a boat, in most cases, it will need to be dropped off at our nearest sales agent and some unique procedures will apply. We will work closely with you and our auction agents to determine the best process. To donate a boat today, go to the donate now page. For problems relating to entering the boats serial number, please see faq #14.
    `
    ,
    `
    A: Yes, we can assist you in donating their estate vehicle. Please fill in our online submission form and we will work through the process with you.
    `
    ,
    `Donate a Car Canada is a business, serving Canadian donors and their chosen charities since 2005. Many charities are unable to accommodate this type of fundraising due to the labor intensive administrative process associated with Gifts in Kind donations. Donate a Car Canada does the work so that your charity does not need to spend valuable man hours administrating the many details involved in processing a car for donation.

    `
]

const FAQ = () => {
    return (
        <div>
            <Header />
            <div className='main body ui container'>
            <Accord id='1' title='What can i donate' content={contents[0]}/>
            <Accord id='2' title='How do i donate my vechile' content={contents[1]} />
            <Accord id='3' title='How much will my tax receipt be' content={contents[2]} />
            <Accord id='4' title='My car hasnt run in year, can i still donate it' content={contents[3]} />
            <Accord id='5' title='What if my vehicle is not registered' content={contents[4]} />
            <Accord id='6' title='What if I do not have insurance' content={contents[5]} />
            <Accord id='7' title='When will you pick up my car' content={contents[6]} />
            <Accord id='8' title='What do i do with my license plates' content={contents[7]} />
            <Accord id='9' title='Can you pick up my car from any location' content={contents[8]} />
            <Accord id='10' title='Do i have to pay for my vechile to be towed' content={contents[9]} />
            <Accord id='11' title='Can i drop off my vehicle' content={contents[10]} />
            <Accord id='12' title='Can i donate my car to another charitable group' content={contents[11]} />
            <Accord id='13' title='Is my donation tax deductible' content={contents[12]} />
            <Accord id='14' title='When will I receive my tax receipt' content={contents[13]} />
            <Accord id='15' title='The submission form will not accept my serial number' content={contents[14]}/>
            <Accord id='16' title='How do i donate a boat' content={contents[15]} />
            <Accord id='17' title='My loved one has passed. Can i donate their estate vechile' content={contents[16]} />
            <Accord id='18' title='Is donate a car canada a charity' content={contents[17]} />

            </div>
            <Footer />
        </div>
    )
}

export default FAQ;
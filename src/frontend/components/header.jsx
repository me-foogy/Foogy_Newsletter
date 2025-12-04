export default function Header(){
    
    //fetch date from the device
    const date_day = new Date();
    //convert date to required format
    const date = `${date_day.getFullYear()} - ${date_day.getMonth()} - ${date_day.getDay()}`;
    let day = date_day.getDay(); //gets date in numeric format
    const day_array=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    day=day_array[day]; //day in text format

    
    return(
        <header>
            <div className="flex flex-row justify-between mx-10 md:mx-[var(--m-side)] mt-5 mb-1 font-inter">
                <p>{date}</p>
                <p>{day}</p>
            </div>
            <hr className="bg-black border-2"/>
            <div className="flex flex-col items-center">
                <h1 className="font-anonymous md:mx-[var(--m-side)] md:mt-[-40px] text-[13vw]">FOOGY . CO</h1>
                <h3 className="text-[2vw] md:mt-[-40px] mb-3">DAILY CONTENT ABOUT THE LATEST TRENDS</h3>
            </div>
            <hr className="bg-black border-2"/>
        </header>
    )
}
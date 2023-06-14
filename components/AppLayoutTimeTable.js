import Link from 'next/link';
import { useRouter } from 'next/router';

function AppLayoutTimeTable(props) {
  const route = useRouter();
  const bgPage = {
    width: "100%",
    backgroundImage: "url(/image/Header_Timetable.jpg)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  
  const path = route.asPath.split('/');

  return (
    <div>
      <div className="z-0 min-h-screen object-cover object-center relative" style={bgPage}>
        <div className="-z-10 absolute top-0 h-full w-full bg-blue-primary/80"></div>
        <div className="p-8">
          <div className="z-30 text-white py-4 flex justify-around">
            <Link href="/timetable" className={"px-8 font-bold pb-2 " + (path[1] == 'timetable' ? 'active-border active' : '')}>
              <button>STUDIO WORKOUTS</button>
            </Link>
            {/* <Link href="/online-class" className={"px-8 font-bold pb-2 " + (path[1] == 'online-class' ? 'active-border active' : '')}>
              <button>ONLINE WORKOUTS</button>
            </Link> */}
          </div>
          <div className="border-b-2 border-yellow-primary my-4 mx-2"></div>
          <div>
            { props.children }
          </div>
        </div>

      </div>
    </div>
  )
}

export default AppLayoutTimeTable
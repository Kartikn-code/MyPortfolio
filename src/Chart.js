
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const data = [
  { name: 'HTML', Skills: 100 },
  { name: 'CSS', Skills: 90 },
  { name: 'JavaScript', Skills: 60 },
  { name: 'React', Skills: 50 },
  {name: 'SQl',Skills:70},
  {name:'VS-code',Skills:100},
  {name:'django',Skills:70},
  {name:'Git-Hub',Skills:90}
];

export default function StyledChart() {
  return (
   
    <div data-aos="flip-up"  className="graphccontainer-fluid fs-lg-1 fs-md-2 fs-sm-3 col-lg-12 col-md-12 col-sm-12 text-center justify-content-center "style={{ width: '60%', margin: '20px auto' }}>  {/* Controls overall width */}
    <div></div>
    <ResponsiveContainer width="90%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="tranparent" strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#111"  />
        <YAxis stroke="#111"  />
        <Tooltip />
        <Legend />
        <Line type="monotype" dataKey="Skills" stroke="#9125d8" strokeWidth={6}  />
      </LineChart>
    </ResponsiveContainer>
  </div>
  );
}


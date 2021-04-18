import Head from 'next/head'
import Header from '../src/components/header';
import Map from '../src/components/map';


export default function MapPage() {
  return (
    <div style={{overflow: 'hidden'}}>
      <Header
      name="В панель управления"
      link="/dashboard"
      />
      <Map />
    </div>
  )
}

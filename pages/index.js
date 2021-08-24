import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/button'
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import Popup from '../components/popup';
import ReactMapGL, { Marker } from 'react-map-gl';
export default function Home() {


  const [_in, setIn] = useState(false);


  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  const [p, setP] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
  })

  return (
    <div className='container'>
      <CSSTransition in={_in} classNames='layout-transition' timeout={1000} >
        <div className="w-full">
          <header className='flex h-10 shadow-sm items-center px-9 header'>
            <div className='flex-auto header__left'>
              <h3 className='text-sm text-blue-400'>Cùng đi chơi nào</h3>
            </div>
            <div className='flex items-center header__left'>
              <Image className='rounded-full cursor-pointer' objectFit='fill' src='/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpeg' width={30} height={30} />
            </div>
          </header>
          <div className='container shadow max-w-3xl my-6 mx-auto w-full rounded py-4'>
            <header className='flex items-center justify-between h-10 px-6'>
              <Button disable={true}>
                Tạo nhóm
              </Button>

              <div>
                <span className='text-base text-blue-400'>Thông tin cá nhân</span>
              </div>
              <button className='flex border px-3 py-2 rounded cursor-poiter bg-blue-400 text-sm'>
                Tạo nhóm
              </button>
            </header>
            <form className='p-6 pb-0'>
              <div className='flex items-center my-4'>
                <label className='block w-200 text-sm mr-1'>Tên của bạn<span className='required-dot'>*</span>: </label>
                <input type='text' className='border rounded flex-1 focus:ring focus:border-blue-100 text-xs p-2' />
              </div>
              <div className='flex items-center'>
                <Button className='w-200'>Chọn địa điểm của bạn</Button>
                <input type='text' className='border rounded flex-1 focus:ring focus:border-blue-100 text-xs p-2' />
              </div>
            </form>
          </div>
        </div>
      </CSSTransition>
      <Button onClick={e => setViewport({ longitude: 100, latitude: 10.22, zoom: 10 })}>In</Button>
      <Popup >
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapboxApiAccessToken='pk.eyJ1IjoidHVuZ3B2OTciLCJhIjoiY2tzb3IzNzE1M3U2bTJ3bzJzdmxpc3VxeCJ9.bWom9lqXVp6IMGcWH0Aw_A'
          onViewportChange={(viewport) => setViewport(viewport)}
          captureDrag={false}
        >
          <Marker longitude={p.longitude} latitude={p.latitude}  onDrag={e => {
            console.log('e : ', e);
          }}><button>hello</button></Marker>
        </ReactMapGL>
      </Popup>
    </div>
  )
}

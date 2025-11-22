import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Toast = () => {

  const handleToast1 = () => {
    toast.success("Success Button Clicked!", {
      position: "bottom-center",
      theme: "dark",
      style: {
        border: "1px solid rgba(211, 211, 211, 0.053)"
      }
    });
  }
  const handleToast2 = () => {
    toast.info("Info Button Clicked!", {
      position: "bottom-center",
      theme: "dark",
      style: {
        border: "1px solid rgba(211, 211, 211, 0.053)"
      }
    });
  }
  const handleToast3 = () => {
    toast.error("Error Button Clicked!", {
      position: "bottom-center",
      theme: "dark",
      style: {
        border: "1px solid rgba(211, 211, 211, 0.053)"
      }
    });
  }
  const handleToast4 = () => {
    toast(<div className='d-flex align-items-center gap-2'>
      <i class="fi fi-tr-customize-edit"></i>
      <p>Custom Button Clicked</p>
    </div>, {
      position: "bottom-center",
      theme: "dark",
      style: {
        border: "1px solid rgba(211, 211, 211, 0.053)"
      }
    });
  }
  return (
    <div className='all-card'>
      <div className='card'>
        <button onClick={handleToast1} className='btn btn-info'>Success Notification</button>
        <ToastContainer />
      </div>
      <div className='card'>
        <button onClick={handleToast2} className='btn btn-info'>Info Notification</button>
        <ToastContainer />
      </div>
      <div className='card'>
        <button onClick={handleToast3} className='btn btn-info'>Error Notification</button>
        <ToastContainer />
      </div>
      <div className='card'>
        <button onClick={handleToast4} className='btn btn-info'>Custom Notification</button>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Toast
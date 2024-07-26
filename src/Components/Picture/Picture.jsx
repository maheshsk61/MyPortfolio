import './Picture.css';
import React from 'react';
export default function Picture() {
    return (
        <div className="image text-center p-5">
            {/* https://drive.google.com/file/d/1ocNi_Zo03UMKJLPADBG8oLuEXGrNjGpf/view?usp=sharing */}
            <img src="https://drive.google.com/thumbnail?id=1ocNi_Zo03UMKJLPADBG8oLuEXGrNjGpf" alt="My_Photo" className='img-fluid' />
        </div>
    )
}
import React from 'react'
import galleryImages from './galleryImages'
import Mansonry, {ResponsiveMasonry} from 'react-responsive-masonry'
const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Mansonry gutter='1rem'>
            {
                galleryImages.map((item,index)=>(
                    <img 
                    className='mansory__img'
                    src={item} 
                    key={index}
                    alt='' 
                    style={{width:'100%', display: 'block' ,borderRadius: '10px'}}
                    />
                ))
            }
        </Mansonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery
import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'
import Section from '@shared/Section'

import ImageViewer from '../ImageViewer'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1) // 선택되지 않았을때(-1) 초기값

  // 이미지 선택 여부 확인
  const open = selectedIdx > -1

  // 이미지 선택시 이미지 오픈페이지 띄우기
  const handleSelectedImage = (idx: number) => {
    // idx 값으로 이미지 선택값 업데이트
    setSelectedIdx(idx)
  }

  // 이미지 닫기
  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(idx)
              }}
            >
              <img src={src} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery

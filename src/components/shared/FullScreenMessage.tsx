import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Heart />
      ) : (
        <>
          <Error />
          에러가 발생했어요. 잠시 후 다시 시도해주세요
        </>
      )}
    </div>
  )
}

function Heart() {
  return (
    <svg
      className={cx('icon-heart')}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}

function Error() {
  return (
    <svg
      className={cx('icon-error')}
      enable-background="new 0 0 64 64"
      height="64px"
      version="1.1"
      viewBox="0 0 64 64"
      width="64px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_1">
        <g>
          <circle cx="32" cy="32" fill="#C75C5C" r="32" />
        </g>
        <g opacity="0.2">
          <path
            d="M16.954,50c-4.4,0-6.2-3.118-4-6.928L28,17.012c2.2-3.811,5.8-3.811,8,0l15.046,26.06    c2.2,3.811,0.4,6.928-4,6.928H16.954z"
            fill="#231F20"
          />
        </g>
        <g>
          <path
            d="M16.954,48c-4.4,0-6.2-3.118-4-6.928L28,15.012c2.2-3.811,5.8-3.811,8,0l15.046,26.06    c2.2,3.811,0.4,6.928-4,6.928H16.954z"
            fill="#F5CF87"
          />
        </g>
        <g>
          <path
            d="M34,32c0,1.105-0.895,2-2,2l0,0c-1.105,0-2-0.895-2-2v-8c0-1.105,0.895-2,2-2l0,0c1.105,0,2,0.895,2,2V32z    "
            fill="#4F5D73"
          />
        </g>
        <g>
          <path
            d="M34,40c0,1.105-0.895,2-2,2l0,0c-1.105,0-2-0.895-2-2l0,0c0-1.105,0.895-2,2-2l0,0    C33.105,38,34,38.895,34,40L34,40z"
            fill="#4F5D73"
          />
        </g>
      </g>
      <g id="Layer_2" />
    </svg>
  )
}

export default FullScreenMessage

import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // 1. wedding 데이터 호출
  // 최초에 한번 호출
  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding11')
      .then((response) => {
        // response이 제대로 되지 않았을때 에러 메세지를 주지않으면 빈배열로 출력됨
        // 404 에러 -> 명시적으로 throw 해줘야 함
        if (response.ok === false) {
          throw new Error('청첩장 정보를 불러 오지 못했습니다.')
        }
        return response.json()
      })
      .then((data) => {
        setWedding(data)
        setLoading(false) // 에러 로딩 끝
      })
      .catch((e) => {
        console.log('에러발생', e)
        setError(true)
      })
      // 에러상황에도 로딩이 끝날 수 있도록 설정
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error...</div>
  }

  return <div className={cx('container')}>{JSON.stringify(wedding)}</div>
}

export default App

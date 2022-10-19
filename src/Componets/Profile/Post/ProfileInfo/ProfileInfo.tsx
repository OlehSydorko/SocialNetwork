import classes from './ProfileInfo.module.css'
import PreLoader from '../../../Common/PreLoader'
import { FC } from 'react'

// type HomeType = {
//   city: string
//   street: string
//   house: number
// }
//
// type CarType = {
//   color: string
//   speed: number
//   price: number
// }

type PropsType = {
  profile: any
  // age: number
  // name: string
  // isMan: boolean
  // flowers: string[]
  // home: HomeType
  // _home: {
  //   city: string
  //   street: string
  //   house: number
  // }
  // goOutside: (arg0: number, home: HomeType) => void
  // empty: null
  // void: undefined
  // choose: 'red' | 'blue' | 'green'
  // myOwn: CarType & HomeType
  // didntSure?: string
}

const ProfileInfo: FC<PropsType> = ({ profile }) => {
  console.log(profile)
  if (!profile) {
    return <PreLoader />
  }

  return (
    <div>
      <img
        src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
        alt=''
      />

      <div className={classes.descriptionBlock}>
        <img src={profile?.photos?.large} alt='' />
        <div>description</div>
      </div>
    </div>
  )
}
export default ProfileInfo

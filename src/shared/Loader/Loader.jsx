import { InfinitySpin } from 'react-loader-spinner';
import { Load } from './Loader.styled';

export default function Loader() {
    return (
      <>
        <Load>
          <InfinitySpin
            display='flex'
            width='200'
            color="#ffa500"
            ariaLabel="infinity-spin-loader"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClassName=""
            visible={true}
          />
        </Load>
        </>
    )
}

import { InfinitySpin } from 'react-loader-spinner';

export default function Loader() {
    return (
        <>
        <InfinitySpin
            display='flex'
            width='200'
            color="#ffa500"
            ariaLabel="infinity-spin-loader"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClassName=""
            visible={true}
            />
        </>
    )
}

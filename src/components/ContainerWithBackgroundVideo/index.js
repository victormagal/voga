export default function ContainerWithBackgroundVideo({ uri, children }) {
  return (
    <div className='relative'>
      <video
        autoPlay
        className='absolute h-full w-full object-cover z-0'
        loop
        muted
      >
        <source src={uri} type='video/mp4' />
      </video>
      <div className='relative z-10'>
        {children}
      </div>
    </div>
  );
}

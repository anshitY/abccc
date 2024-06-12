import { createLazyFileRoute } from '@tanstack/react-router'

// import { CheckIcon } from '@heroicons/react/20/solid'

// const includedFeatures = [
//   'Private forum access',
//   'Member resources',
//   'Entry to annual conference',
//   'Official member t-shirt',
// ]
export const Route = createLazyFileRoute('/posts')({
  component: Posts,
  
})

function Posts () {
  return (<div className="p-2">hi post here</div>)}
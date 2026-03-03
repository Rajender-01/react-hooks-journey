import RunOnceOnMount from "@/src/hooks-learning/01-basic-hooks/useEffect/1_RunOnceOnMount"
import DependencyChange from "@/src/hooks-learning/01-basic-hooks/useEffect/2_DependencyChange"

const page = () => {
  return (
    <div>
      <RunOnceOnMount/>
      <DependencyChange/>
    </div>
  )
}

export default page

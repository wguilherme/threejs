import ReactThreeTestRenderer from '@react-three/test-renderer'
import { RotatingCubeMesh, RotatingCubeMeshSpring } from './page'


describe("RotatingCubeMesh", () => {
  it('mesh to have two children', async () => {
    const renderer = await ReactThreeTestRenderer.create(<RotatingCubeMesh />)
    const mesh = renderer.scene.children[0].allChildren
    expect(mesh.length).toBe(2)
  })

  it('click event makes RotatingCubeMesh bigger', async () => {
    const renderer = await ReactThreeTestRenderer.create(<RotatingCubeMesh />)
    const mesh = renderer.scene.children[0]
    expect(mesh.props.scale).toBe(1)
    await renderer.fireEvent(mesh, 'click')
    expect(mesh.props.scale).toBe(1.5)
  })
})

describe("RotatingCubeMeshSpring", () => {
  it('click event makes box bigger', async () => {
    const renderer = await ReactThreeTestRenderer.create(<RotatingCubeMeshSpring />)
    const mesh = renderer.scene.children[0].allChildren
    expect(mesh.length).toBe(2)
  })

  it('click event makes RotatingCubeMeshSpring bigger', async () => {
    const renderer = await ReactThreeTestRenderer.create(<RotatingCubeMesh />)
    const mesh = renderer.scene.children[0]
    expect(mesh.props.scale).toBe(1)
    await renderer.fireEvent(mesh, 'click')
    expect(mesh.props.scale).toBe(1.5)
  })
})

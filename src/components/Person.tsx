import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  person: IPerson
  removePerson: (person: IPerson) => void
}

export const Person: React.FC<Props> = ({ person, removePerson }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deletePerson = React.useCallback(
    (article: IPerson) => dispatch(removePerson(article)),
    [dispatch, removePerson]
  )

  return (
    <div className="Person">
      <div>
        <h1>{person.name}</h1>
        <p>{person.age}</p>
      </div>
      <button onClick={() => deletePerson(person)}>Delete</button>
    </div>
  )
}
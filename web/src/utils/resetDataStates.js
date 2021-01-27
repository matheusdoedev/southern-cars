export default function resetDataStates(setStates) {
  setStates?.forEach((setState) => setState(""));
}

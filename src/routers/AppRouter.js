import React from 'react'
import AddEntryPage from '../components/AddEntryPage'
import EntriesPage from '../components/EntriesPage'
import DashboardPage from '../components/DashboardPage'
import EditEntryPage from '../components/EditEntryPage'
import Header from '../components/Header'
import { HomePage } from '../components/HomePage'
import SignUpModal from '../components/SignUpModal'
import LogInModal from '../components/LogInModal'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

handleLogInFormSubmit(e) {
  e.preventDefault()
  this.setState(({ formSubmitted: true }))
}

handleSignUpFormSubmit(e) {
  e.preventDefault()
  this.setState(({ formSubmitted: true }))
}

const AppRouter = () => (
  <BrowserRouter>
    <div className="main-wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/entries" component={EntriesPage} />
        <Route path="/create" component={AddEntryPage} />
        <Route path="/entries/:id" component={EditEntryPage} />
        <Route path="/logIn" render={(props) => <LogInModal {...props} /> } />
        <Route path="/signUp" render={(props) => <SignUpModal {...props} /> } />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
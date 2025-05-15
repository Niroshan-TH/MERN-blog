import {
  Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownDivider,
    DropdownHeader,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    TextInput
  } from 'flowbite-react'
import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { useSelector } from 'react-redux'


export default function Header() {
    const path= useLocation().pathname;
    const {currentUser}=useSelector(state=>state.user)
    console.log(currentUser);
    const profilePic = currentUser?.profilePicture || "https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc=";
  return (
    <Navbar className="border-b-2 ">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 !bg-gradient-to-r !from-indigo-500 !via-purple-500 !to-pink-500 rounded-lg">
          Niroshan's
        </span>
        blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className=" lg:inline"
        />
      </form>
      <Button className="w-15 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10   sm:inline' color='gray' pill>
            <FaMoon/>
        </Button>
        {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt='user'
                  img = {currentUser.profilePicture}
                  rounded
                />
              }>
                <DropdownHeader>
                  <span className='block text-sm '>@{currentUser.username}</span>
                  <span className='block font-extrabold'>@{currentUser.email}</span>
                </DropdownHeader>
                <DropdownItem as={Link} to="/dashboard?tab=profile">
                  Profile
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem>
                  Sign out
                </DropdownItem>
            </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white" outline>
                Sign In
            </Button>
          </Link>
         )}
        
        <NavbarToggle/>
      </div>
        <NavbarCollapse>
            <NavbarLink as ={Link} to='/' active={path==="/"} >
                Home
            </NavbarLink>
            <NavbarLink as ={Link} to='/about'active={path==="/about"}>
                About
            </NavbarLink>
            <NavbarLink as ={Link} to='/projects' active={path==="/projects"}>
                Projects
            </NavbarLink>
        </NavbarCollapse>
    </Navbar>
  )
}

import React from 'react'
import { Footer , FooterTitle ,FooterLink, FooterLinkGroup, FooterDivider , FooterCopyright , FooterIcon } from 'flowbite-react'
import { Link } from 'react-router-dom'
import{ BsFacebook , BsInstagram ,BsTwitter , BsGithub , BsDribbble} from 'react-icons/bs'


export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'> 
        <div className='w-full max-w-7xl mx-auto'>
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="">
                <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                    <span className="px-2 py-1 !bg-gradient-to-r !from-indigo-500 !via-purple-500 !to-pink-500 rounded-lg">
                    Niroshan's
                    </span>
                    blog
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3">
                    <div className="">
                       <FooterTitle title='About'/>
                        <FooterLinkGroup col>
                            <FooterLink>yei yei yei </FooterLink>
                            <FooterLink>yei yei yei </FooterLink>
                            <FooterLink>yei yei yei </FooterLink>

                        </FooterLinkGroup>
                    </div>
                    <div className="">
                       <FooterTitle title='Folow us'/>
                        <FooterLinkGroup col>
                            <FooterLink>github </FooterLink>
                            <FooterLink> Discord </FooterLink>
                            

                        </FooterLinkGroup>
                    </div>
                    <div className="">
                       <FooterTitle title='Leagal'/>
                        <FooterLinkGroup col>
                            <FooterLink>Privacy policy </FooterLink>
                            <FooterLink>terms and conditions </FooterLink>

                        </FooterLinkGroup>
                    </div>
                </div>
            </div>
            <FooterDivider/>
            <div className='w-full sm:flex sm:item-center'>
                <FooterCopyright>

                </FooterCopyright>
            </div>
            <div className=' flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                <FooterIcon icon={BsFacebook  }/>
                <FooterIcon icon={BsInstagram  }/>
                <FooterIcon icon={BsTwitter  }/>
                <FooterIcon icon={BsGithub  }/>
                <FooterIcon icon={BsDribbble  }/>

            </div>
        </div>

    </Footer>
  )
}

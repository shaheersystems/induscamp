import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Dropdown({ children }) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>{children}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div>
              <Menu.Item>
                <div className="p-2">
                  <button className="w-full py-1 text-sm font-semibold text-white rounded bg-brand-purple">
                    0 XP
                  </button>
                </div>
              </Menu.Item>
            </div>
            <div>
              <Menu.Item>
                <div className="p-2">
                  <button className="flex items-center w-full gap-2 px-2 py-2 text-sm text-left rounded hover:bg-gray-100">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.0187 26.1122C29.5154 22.4388 26.6591 19.6837 23.2014 18.3061C25.1557 16.7755 26.3584 14.3265 26.3584 11.7245C26.3584 6.82653 22.6001 3 17.9398 3C13.2794 3 9.52112 6.82653 9.52112 11.5714C9.52112 14.1735 10.7238 16.6224 12.6781 18.1531C9.22045 19.5306 6.36413 22.2857 4.8608 25.9592C4.25947 27.4898 4.4098 29.3265 5.3118 30.7041C6.2138 32.2347 7.86746 33 9.67145 33H26.3584C28.1624 33 29.6657 32.0816 30.7181 30.7041C31.6201 29.3265 31.7704 27.6429 31.0187 26.1122ZM12.5278 11.5714C12.5278 8.5102 14.9331 6.06122 17.9398 6.06122C20.9464 6.06122 23.3517 8.5102 23.3517 11.5714C23.3517 14.6327 20.9464 17.0816 17.9398 17.0816C14.9331 17.0816 12.5278 14.6327 12.5278 11.5714ZM28.1624 29.1735C27.7114 29.7857 27.1101 30.2449 26.3584 30.2449H9.52112C8.76945 30.2449 8.16812 29.9388 7.71712 29.1735C7.26613 28.5612 7.26613 27.949 7.56679 27.3367C9.37079 22.898 13.4298 20.1429 17.9398 20.1429C22.4497 20.1429 26.5087 22.898 28.3127 27.1837C28.6134 27.7959 28.4631 28.5612 28.1624 29.1735Z"
                        fill="black"
                      />
                    </svg>
                    <span>My Portfolio</span>
                  </button>
                </div>
              </Menu.Item>
            </div>
            <div>
              <Menu.Item>
                <div className="p-2">
                  <button className="flex items-center w-full gap-2 px-2 py-2 text-sm text-left rounded hover:bg-gray-100">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.3194 3.69401C16.9421 2.76866 18.9229 2.76866 20.5456 3.69401C20.5578 3.70095 20.5699 3.70808 20.5818 3.71541L28.9352 8.83224C30.5835 9.78156 31.5 11.4968 31.5 13.358V22.7806C31.5 24.5802 30.6295 26.3431 29.0478 27.1815L20.7168 32.2846C20.7049 32.2919 20.6928 32.2991 20.6806 32.306C19.0579 33.2313 17.0771 33.2313 15.4544 32.306C15.4422 32.2991 15.4301 32.2919 15.4182 32.2846L7.06478 27.1677C5.41643 26.2184 4.5 24.5032 4.5 22.642V13.358C4.5 11.4985 5.41476 9.78472 7.06027 8.83486L15.2749 3.72054C15.2895 3.71141 15.3044 3.70256 15.3194 3.69401ZM16.6509 6.10519L8.44013 11.2171C8.42546 11.2262 8.41062 11.2351 8.39562 11.2436C7.6263 11.6823 7.2 12.4551 7.2 13.358V22.642C7.2 23.5449 7.6263 24.3177 8.39562 24.7564C8.40779 24.7633 8.41986 24.7704 8.43182 24.7778L16.7821 29.8927C17.5808 30.3406 18.5542 30.3406 19.3529 29.8927L27.7032 24.7778C27.7319 24.7602 27.7613 24.7436 27.7913 24.7283C28.3386 24.4474 28.8 23.7338 28.8 22.7806V13.358C28.8 12.4551 28.3737 11.6823 27.6044 11.2436C27.5922 11.2367 27.5801 11.2296 27.5682 11.2222L19.218 6.10733C18.4205 5.66009 17.4489 5.65938 16.6509 6.10519ZM18 15.1594C16.4343 15.1594 15.165 16.4622 15.165 18.0693C15.165 19.6764 16.4343 20.9792 18 20.9792C19.5657 20.9792 20.835 19.6764 20.835 18.0693C20.835 16.4622 19.5657 15.1594 18 15.1594ZM12.465 18.0693C12.465 14.9316 14.9431 12.388 18 12.388C21.0569 12.388 23.535 14.9316 23.535 18.0693C23.535 21.207 21.0569 23.7506 18 23.7506C14.9431 23.7506 12.465 21.207 12.465 18.0693Z"
                        fill="black"
                      />
                    </svg>
                    <span>Account settings</span>
                  </button>
                </div>
              </Menu.Item>
            </div>
            <div>
              <Menu.Item>
                <div className="p-2">
                  <button className="flex items-center w-full gap-2 px-2 py-2 text-sm text-left rounded hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

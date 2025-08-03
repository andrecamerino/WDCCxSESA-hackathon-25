'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Child = {
  _id: string;
  name: string;
  email: string;
  money: number;
};

const Page = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [children, setChildren] = useState<Child[]>([]);
  const [selectedChild, setSelectedChild] = useState<Child | null>(null);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await fetch('/api/children');
        const data: Child[] = await response.json();
        setChildren(data);
        if (data.length > 0) setSelectedChild(data[0]);
      } catch (error) {
        console.error('Error fetching children:', error);
      }
    };

    fetchChildren();
  }, []);

  const handleSelect = (childName: string) => {
    const child = children.find((c) => c.name === childName);
    if (child) setSelectedChild(child);
    setShowDropdown(false);
  };

  return (
    <div style={{ backgroundColor: '#D4EEFF', minHeight: '100vh' }}>
      <div style={contentWrapperStyle}>
        <Image
          src="/assets/piggy.png"
          alt="Piggy Quest"
          width={150}
          height={150}
          className="mx-auto"
        />

        {/* UI Boxes */}
        <div style={boxStyle}>
          <p style={labelStyle}>
            Current Child: <strong>{selectedChild?.name || 'Loading...'}</strong>
          </p>

          <div style={{ position: 'relative' }}>
            <button
              style={buttonStyle}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Change Child ⌄
            </button>

            {showDropdown && (
              <ul style={dropdownStyle}>
                {children.map((child) => (
                  <li
                    key={child._id}
                    onClick={() => handleSelect(child.name)}
                    style={dropdownItemStyle}
                  >
                    {child.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div style={boxStyle}>
          <p style={labelStyle}>Current Task:</p>
          <div style={taskBoxStyle}></div>
          <p style={labelStyle}>
            Value: <span style={coinStyle}>💰</span>
          </p>
        </div>

        <div style={boxStyle}>
          <p style={labelStyle}>
            Current Money:
            <span style={moneyRowStyle}>
              <Image
                src="/assets/coin.png"
                alt="coin"
                width={30}
                height={30}
                style={{ marginLeft: '10px', marginRight: '6px' }}
              />
              {selectedChild?.money ?? '...'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles
const contentWrapperStyle: React.CSSProperties = {
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '100px', // replaces mt-10 on the image
};

const boxStyle: React.CSSProperties = {
  backgroundColor: '#ffffff90',
  border: '2px solid #90caff',
  borderRadius: '16px',
  padding: '20px',
  marginTop: '20px',
};

const labelStyle: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: 'bold',
};

const buttonStyle: React.CSSProperties = {
  marginTop: '10px',
  padding: '10px 20px',
  borderRadius: '12px',
  border: '1px solid #ccc',
  backgroundColor: '#f0f8ff',
  fontSize: '16px',
};

const taskBoxStyle: React.CSSProperties = {
  marginTop: '10px',
  backgroundColor: '#f1f1ff',
  borderRadius: '12px',
  height: '60px',
};

const coinStyle: React.CSSProperties = {
  fontSize: '24px',
  verticalAlign: 'middle',
};

const dropdownStyle: React.CSSProperties = {
  position: 'absolute',
  top: '110%',
  left: 0,
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '8px',
  width: '100%',
  zIndex: 10,
  padding: 0,
  margin: 0,
  listStyle: 'none',
};

const dropdownItemStyle: React.CSSProperties = {
  padding: '10px',
  cursor: 'pointer',
  borderBottom: '1px solid #eee',
  backgroundColor: '#f9f9f9',
};

const moneyRowStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  marginLeft: '10px',
};

export default Page;